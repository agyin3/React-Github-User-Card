import React from 'react';
import Moment from 'react-moment';
import { Card, Icon, Image } from 'semantic-ui-react';

const UserCard = props => {

    

    return(
        <Card centered>
            <Image size='big' src={props.user.avatar_url} />
            <Card.Content>
                <Card.Header>{props.user.name}</Card.Header>
                <Card.Meta>
                     Joined: &nbsp;
                    <Moment format='MM/DD/YYYY'>
                         {props.user.created_at}
                    </Moment>
                </Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <a href={`https://github.com/${props.user.login}?tab=followers`}>
                    <Icon name='user'/>
                    {props.followers.length} Followers
                </a>
            </Card.Content>
        </Card>
    )
}

export default UserCard