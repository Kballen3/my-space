import React from 'react'
import axios from 'axios'
import {Card, Divider, Image,} from 'semantic-ui-react'

class YourFriends extends React.Component {
    state = { friends: [], }

    componentDidMount() {
        axios.get('/api/my_friends')
            .then( response => this.setState({ friends: response.data, }))
    }

    render() {
        const {friends, } = this.state
        return( 
            <Card.Group itemsPerRow={5}>
                {friends.map( friend => 
                    <Card key={friend.id}>
                        <Image src={friend.avatar} />
                        <Card.Content>
                            <Divider />
                            <Card.Header>
                                {friend.first_name},
                                {friend.last_name}
                            </Card.Header>
                        </Card.Content>
                    </Card>
                )}
            </Card.Group>
        )
    }
}

export default YourFriends