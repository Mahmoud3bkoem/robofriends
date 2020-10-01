import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <div>
            {/* remember you have to wrap it in curly brackets to know its javascript like the template tagging in django  */}
           {
               robots.map((user, i) => {
                    return (
                    <Card key= {robots[i].id}
                    id = {robots[i].id} 
                    name= {robots[i].name} 
                    email = {robots[i].email} 
                    />
                    )
                })
           } 
        </div>
    )
}

export default CardList