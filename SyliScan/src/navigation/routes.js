/**
 * List of the different screen routes
 * New screens must be added here
 */
import HomeContainer from '../containers/HomeContainer';
import SettingsPageContainer from '../containers/SettingsPageContainer';
import UploadPageContainer from '../containers/UploadPageContainer';
import EventsPageContainer from '../containers/EventsPageContainer';

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
    }

}

export default Routes;