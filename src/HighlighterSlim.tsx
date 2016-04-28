import * as React from 'react';
const escapeStringRegexp = require('escape-string-regexp');

export interface ReactHighlighterProps {
  search?: string;
  caseSensitive?: boolean;
  matchElement?: string;
  matchClass?: string;
  matchStyle?: Object;
}

export default class ReactHighlighter extends React.Component<ReactHighlighterProps, {}> {

  public constructor(props: ReactHighlighterProps, context: any) {
    super(props, context);

    this.renderElement = this.renderElement.bind(this);
    this.hasSearchTerm = this.hasSearchTerm.bind(this);
    this.getSearch = this.getSearch.bind(this);
    this.getMatchBoundaries = this.getMatchBoundaries.bind(this);
    this.highlightChildren = this.highlightChildren.bind(this);
    this.renderPlain = this.renderPlain.bind(this);
    this.renderHighlight = this.renderHighlight.bind(this);

  }

  private renderElement(children: React.ReactNode) {
    if (typeof children === 'string' && this.hasSearchTerm()) {
      const search = this.getSearch(this.props.search, this.props.caseSensitive);
      return this.highlightChildren(children, search);
    }
    return this.props.children;
  }

  private hasSearchTerm(): boolean {
    return !!((typeof this.props.search !== 'undefined') && this.props.search);
  }

  private getSearch(searchTerm: string, caseSensitive: boolean): RegExp {
    let flags = '';
    if (!caseSensitive) {
      flags += 'i';
    }

    return new RegExp(escapeStringRegexp(searchTerm), flags);
  }

  private getMatchBoundaries(subject, search: RegExp) {
    const matches = search.exec(subject);
    if (matches) {
      return {
        first: matches.index,
        last: matches.index + matches[0].length,
      };
    }
  }

  private matchIndexKey(index: number): string {
    return `match-index-${index}`;
  }

  private highlightChildren(subject: string, search: RegExp) {
    const children = [];
    let remaining = subject;
    let matchIndex = 0;

    while (remaining) {

      if (!search.test(remaining)) {
        children.push(this.renderPlain(remaining, this.matchIndexKey(matchIndex++)));
        return children;
      }

      const boundaries = this.getMatchBoundaries(remaining, search);

      const nonMatch = remaining.slice(0, boundaries.first);
      if (nonMatch) {
        children.push(this.renderPlain(nonMatch, this.matchIndexKey(matchIndex++)));
      }

      const match = remaining.slice(boundaries.first, boundaries.last);
      if (match) {
        children.push(this.renderHighlight(match, this.matchIndexKey(matchIndex++)));
      }
      remaining = remaining.slice(boundaries.last);
    }

    return children;
  }

  private renderPlain(plainString: string, key: string) {
    return <span key={key}>{plainString}</span>;
  }

  private renderHighlight(matchString: string, key: string) {
    return React.DOM[this.props.matchElement || 'strong']({
      key,
      className: this.props.matchClass || 'highlight',
      style: this.props.matchStyle || {},
    }, matchString);
  }

  public render() {
    return (
      <span {...this.props} >
        { this.renderElement(this.props.children) }
      </span>
    )
  }
}
