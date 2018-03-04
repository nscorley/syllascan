/**
 * List of the different screen routes
 * New screens must be added here
 */
import HomeContainer from '../containers/HomeContainer';
import SettingsPageContainer from '../containers/SettingsPageContainer';
import UploadPageContainer from '../containers/UploadPageContainer';
import EventsPageContainer from '../containers/EventsPageContainer';
import Success from '../components/Success';

const Routes = {
    HomePage: {
        screen: HomeContainer,
    },
    UploadPage: {
        screen: UploadPageContainer,
    },
    SettingsPage: {
        screen: SettingsPageContainer,
    },
    EventsPage: {
        screen: EventsPageContainer,
    },
    SuccessPage: {
        screen: Success,
    }

}

export default Routes;