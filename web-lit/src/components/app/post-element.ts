import {
  ApolloQuery,
  customElement,
  html, property,
  TemplateResult }
  from '@apollo-elements/lit-apollo';

import type {
  PostQueryVariables as Variables,
  PostQueryData as Data,
} from '../../schema';

import PostQuery from '../../graphql/queries/post.query.graphql';

import style from './app.css';
import shared from '../shared.css';

@customElement('post-element')
export class PostElement extends ApolloQuery<Data, Variables> {
  @property({ attribute: 'post-id', type: Number }) postId: number;

  static readonly is = 'apollo-app';

  static readonly style = [shared, style];

  query = PostQuery;

  connectedCallback(): void {
    super.connectedCallback();
    this.postId = 1;
  }

  shouldSubscribe(): boolean {
    return !!this.postId;
  }

  updated(changedProperties: Map<string | number | symbol, unknown>): void {
    if (changedProperties.has('postId'))
      this.variables = { id: this.postId };
  }

  updatePostID(e: Event): void {
    const input = e.target as HTMLInputElement;
    this.postId = Number(input.value);
  }

  render(): TemplateResult {
    return html`
    <label for="postid">Post ID</label>
    <input @change=${(e: Event) => this.updatePostID(e)} id ="postid" type="number" value=${this.postId?.toString()}></input>
      <dl>
        <dt>username</dt>
        <dd>${this.data?.post?.title ?? '/'}</dd>
      </dl>
    `;
  }
}
