import React, { Component } from 'react'
import axios from 'axios'

class Posts extends Component {
    constructor(props) { 
        super(props);
        this.state = {
            posts: []
        };
     }


    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => this.setState({posts: res.data}))
    }

    

    render() {
        const postItems = this.state.posts.map(post => (
            <div key={post.id}>
                <h3>
                    {post.title}
                </h3>
                <p>
                    {post.body}
                </p>
            </div>
        )
        ) 
        
        // const cars = ["🚗", "🚙", "🚕"];
        // for (const car of cars){
        //     // Drive the car
        //     console.log(`This is the car ${car}`);
        // }
        return (
            <div>
                <h1>
                    Posts 
                </h1>
                {postItems}
            </div>
        )
    }
}

export default Posts;
