import React, { Component } from 'react';
import Comments from './Comments';
import Content from './Content';
import Content_head from './Content_head';
import Gallery from './Gallery';
import Reviews from './Reviews';

export default class MovieDesc extends Component {
    constructor(props) {
        super(props)

        this.state = {
            commentsState: true,
            reviewsState: false,
            galleryState: false
        }
        this.ShowComments = this.ShowComments.bind(this)
        this.ShowReviews = this.ShowReviews.bind(this)
        this.ShowPhotos = this.ShowPhotos.bind(this)
    }
    ShowComments() {
        this.setState(() => ({
            commentsState: true,
            reviewsState: false,
            galleryState: false
        }))
        console.log(this.state.commentsState);
    }
    ShowReviews() {
        this.setState(() => ({
            commentsState: false,
            reviewsState: true,
            galleryState: false
        }))
        console.log(this.state.reviewsState);
    }
    ShowPhotos() {
        this.setState(() => ({
            commentsState: false,
            reviewsState: false,
            galleryState: true
        }))
        console.log(this.state.galleryState);
    }

    render() {
        return (

            <>
                <section className="content">
                    <Content_head
                        ShowComments={this.ShowComments}
                        ShowReviews={this.ShowReviews}
                        ShowPhotos={this.ShowPhotos}

                    />


                    <Content
                        movieInfo={this.props.movieInfo}
                        commentsState={this.state.commentsState}
                        reviewsState={this.state.reviewsState}
                        galleryState={this.state.galleryState} />
                </section>
            </>
        );
    }
}
