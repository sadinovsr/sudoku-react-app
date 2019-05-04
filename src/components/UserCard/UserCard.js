import React, { Component } from "react";
import { Button } from 'reactstrap';
import "./UserCard.css";

class UserCard extends Component {

  convertDate = (date) => {
    const newDate = new Date(date);
    const stringDate = newDate.toString();
    return stringDate.slice(4, 16);
  }

  render() {
    const { onClose, user } = this.props;

    return (
      <div className="UserCard">
        <div className="UserCard__content">
          <div className="UserCard__content__title">{user.username}</div>
          <div className='UserCard__content__label'>
            E-mail:
          </div>
          <div className='UserCard__content__text'>
            {user.email}
          </div>
          <div className='UserCard__content__label'>
            Joined:
          </div>
          <div className='UserCard__content__text'>
            {this.convertDate(user.createdAt)}
          </div>


          <div className="UserCard__buttons">
            <Button onClick={onClose} >Close</Button>
            <Button color='danger'>Delete</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default UserCard;