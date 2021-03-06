/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { Component } from 'react';
import '../scss/app.scss';
// import * as ProfilePicture from '../Assets/profile.png';
import { apiRoute } from '../utils';

interface AppStates {
  username?: string;
  textOfPostTest: string;
  textForPost: string;
  textOfPutTest: string;
  textForPut: string;
  textOfDeleteTest: string;
  textForDelete: string;
}

interface AppProps {}

export default class App extends Component<AppProps, AppStates> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      username: '',
      textOfPostTest: '',
      textForPost: '',
      textOfPutTest: '',
      textForPut: '',
      textOfDeleteTest: '',
      textForDelete: '',
    };
  }

  getUser = () => {
    fetch(apiRoute.getRoute('test'))
      .then((res) => res.json())
      .then((res) => this.setState({ username: res.username }));
  };

  sendUserInfo = () => {
    const { textOfPostTest } = this.state;

    if (textOfPostTest.trim()) {
      fetch(apiRoute.getRoute('test'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form -urlencoded',
          Accept: 'application/json',
        },
        body: JSON.stringify({ textOfPostTest }),
      })
        .then((res) => res.json())
        .then((res) => this.setState({ textForPost: res.text }));
    }
  };

  changeUserInfo = () => {
    const { textOfPutTest } = this.state;

    if (textOfPutTest.trim()) {
      fetch(apiRoute.getRoute('test'), {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ text: textOfPutTest }),
      })
        .then((res) => res.json())
        .then((res) => this.setState({ textForPut: res.text }));
    }
  };

  deleteUserInfo = () => {
    const { textOfDeleteTest } = this.state;

    if (textOfDeleteTest.trim()) {
      fetch(apiRoute.getRoute('test'), {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ text: textOfDeleteTest }),
      })
        .then((res) => res.json())
        .then((res) => this.setState({ textForDelete: res.text }));
    }
  };

  render() {
    const { username, textForPost, textForPut, textForDelete } = this.state;
    const inputText = 'Input text...';
    return (
      <div>
        <div>
          <div>
            <div>
              <button type="submit" onClick={this.getUser}>
                Test Get Request
              </button>
            </div>
            <label>{'Test for Get: '}</label>
            <h2>{!!username && `Hello ${username}!`}</h2>
          </div>
          <div>
            <input onChange={(e) => this.setState({ textOfPostTest: e.target.value })} placeholder={inputText} />
            <button type="submit" onClick={this.sendUserInfo}>
              Test Post
            </button>
          </div>
          <div>
            <label>{'Test for Post: '}</label>
            <h3>{textForPost}</h3>
          </div>
          <div>
            <input onChange={(e) => this.setState({ textOfPutTest: e.target.value })} placeholder={inputText} />
            <button type="submit" onClick={this.changeUserInfo}>
              Test Put
            </button>
          </div>
          <div>
            <label>{'Test for Put: '}</label>
            <h3>{textForPut}</h3>
          </div>
          <div>
            <input onChange={(e) => this.setState({ textOfDeleteTest: e.target.value })} placeholder={inputText} />
            <button type="submit" onClick={this.deleteUserInfo}>
              Test Delete
            </button>
          </div>
          <div>
            <label>{'Test for Delete: '}</label>
            <h3>{textForDelete}</h3>
          </div>
        </div>
      </div>
    );
  }
}
