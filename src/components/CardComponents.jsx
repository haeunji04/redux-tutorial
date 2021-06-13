import React from 'react';

const Card = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">이름 : {props.user.name}</h5>
                <span>이메일 : {props.user.email}</span>
                <h6 className="card-subtitle mb-2 text-muted">회사명 : {props.user.company.name}</h6>
                <p className="card-text">캐치프래이즈 : {props.user.company.catchPhrase}</p>
            </div>
        </div>
    )
}

export default Card;