
class Sidebar extends React.Component {
    render() {
        return(
            <div className="sidebar">
                <p>Dashboard</p>
                <p>Widget</p>
                <p>Reviews</p>
                <p>Customers</p>
                <p>Online Analysis</p>
                <p>Settings</p>
            </div>
        )
    }
}

class TopPart extends React.Component {
    render() {
        return (
            <div className={this.props.text}>
               <p>{this.props.count}</p>
            </div>
        )
    }
}

class MainPart extends React.Component {
    render() {
        return (
            <div className="mainPart">Website Visitors
                <div>
                    <MainPartInside/>
                </div>
            </div>
        )
    }
}

class MainPartInside extends React.Component {
    render() {
        return (
            <div className="mainPartInside">
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        // let arr = ["String1", "String2"] 
        return (
            <div className="allParts">
            <Sidebar/>
            <TopPart text="Reviews" count="1,281"/>
            <TopPart text="Average Rating" count="4.6"/>
            <TopPart text="Sentiment Analysis" count="960,122,321"/>
            <MainPart/>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('main')
)
