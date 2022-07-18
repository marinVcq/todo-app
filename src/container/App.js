import { connect } from 'react-redux';
import App from '../App';

const mapStateToProps = state => {
	return {
		darkThemeEnabled: state.theme.darkThemeEnabled
	};
};

const mapDispatchToProps = dispatch => {
	return {
		toggleTheme: () => dispatch({
			type: 'TOGGLE_THEME',
		}),
	};
};

const AppContainer = connect(mapStateToProps,mapDispatchToProps)(App);

export default AppContainer;
