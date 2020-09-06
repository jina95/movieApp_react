import React from 'react';

class Detail extends React.Component{
    componentDidMount(){
        const { location, history } = this.props;
        if(location.state === undefined){
            history.push("/")
            // 카드를 클릭해서 들어온게 아니라면 리다이렉트 시킴( 홈 화면으로 )
        }
        console.log(location.state);

        
    }
    render(){
        const {location} = this.props
        if(location.state){
            return <span>{location.state.title}</span>;
        } else return null 
    }
}

export default Detail;