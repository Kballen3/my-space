import React from 'react'
import {Header, Image, Button, Card, Icon, } from 'semantic-ui-react'
import axios from 'axios'
import { Link, } from 'react-router-dom'


class Home extends React.Component {
    state = {friends: [],}

    componentDidMount() {
        axios.get('/api/friends')
            .then(response => this.setState({friends: response.data}))
    }

    friendSuggestion = () => {
        const {friends,} = this.state
        debugger
        if (friends.length) {
            const index = Math.floor(Math.random() * friends.length)
            return friends[index]
        } else {
            return null
        }
    }

    addFriend = (id) => {
        let { friends, } = this.state
        axios.put(`/api/friends/${id}`)
            .then( () => this.setState({friends: friends.filter( c => c.id !==id), }) )
    }

    rejectFriend = (id) => {
        let { friends, } = this.state
        this.setState({friends: friends.filter( c => c.id !==id), })
    }

    render() {
        const friend = this.friendSuggestion()
        if (friend) {
            return (
                <div>
                    <br />
                    <Header as='h1'>MySpace</Header>
                    <br />
                    <Header as='h6'> Friend Suggestions</Header>
                    <br />
                    <Card key={friend.id}>
                        <Image src={friend.avatar} />
                        <Card.Content>
                            <Card.Header>
                                { friend.first_name },
                                { friend.last_name}
                            </Card.Header>
                        </Card.Content>
                        <Card.Content extra>
                            <Button color="red" icon basic onClick={() => this.rejectFriend(friend.id)}>
                                <Icon name="thumbs down" />
                            </Button>
                            <Button color="green" icon basic onClick={() => this.addFriend(friend.id)}>
                                <Icon name="thumbs up" />
                            </Button>
                        </Card.Content>
                    </Card>
                    <Link to="/my_friends">
                        <Button color="blue">
                            List of Friends
                        </Button>
                    </Link>
                </div>
            )
        } else {
            return <Header textAlign='center'> No Friends </Header>
        }
    }
}

export default Home