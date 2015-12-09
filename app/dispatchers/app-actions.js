import AppConstants from './app-constants';
import { dispatch, register } from './app-dispatcher';

export default {
    navigateTo ( navigationTree ) {
        console.log('appAction: ' + navigationTree);
        dispatch({
            actionType: AppConstants.NAVIGATE_TO, navigationTree
        })
    }
}