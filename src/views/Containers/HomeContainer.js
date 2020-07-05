import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { fetchTableData } from '../../actions/searchAction';
import Home from '../Home';

class HomeContainer extends Component {

    
    componentDidMount() {
        this.props.getTableData();
    }
    render(){
        const { rightTableData } = this.props;
        return(<Home rightTableData={rightTableData}/>)
    }
    
}

const mapStateToProps = (state) => ({
    
    rightTableData:state.searchData
})

const mapDispatchToProps = (dispatch) => ({         //so that we can use function as props
    getTableData: () => dispatch(fetchTableData()) //action is always dipatched
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);