import React from 'react';
import Moment from 'react-moment';
import { Card, Image } from 'semantic-ui-react';

const FollowersCard = props => {

    return(
        <div className='followers-container'>
        {props.followers.map(follower => {
        return (
        <Card className='follower-card' key={follower.id} centered>
            <Image size='big' src={follower.avatar_url} />
            <Card.Content>
                <Card.Header>{follower.login}</Card.Header>
                <Card.Meta>
                     Joined: &nbsp;
                    <Moment format='MM/DD/YYYY'>
                         {follower.created_at}
                    </Moment>
                </Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <a href={`https://github.com/${follower.login}?tab=followers`}>
                    View Work
                </a>
            </Card.Content>
        </Card>
        )})}
        </div>
    )
}

export default FollowersCard