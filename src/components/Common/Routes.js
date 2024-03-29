import Main from '../../pages/Main';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import SearchFriend from '../../pages/SearchFriend';
import SearchGroup from '../../pages/SearchGroup';
import NewGroup from '../../pages/NewGroup';
import Record from '../../pages/Record';
import EditProfile from '../EditProfile';
import Groups from '../../pages/Groups';
import Friends from '../../pages/Friends';
import RequestFriend from '../../pages/RequestFriend';
import WebcamComponent from '../../pages/Cam';
import Test from '../Test';
import GroupInfo from '../../pages/GroupInfo';
import BlockedFriends from '../../pages/BlockedFriends';
import GroupInfoKickout from '../../pages/GroupInfoKickout';
import MyProfile from '../MyProfile';

const routes = [
    {
        id: 'main',
        path: '/',
        component: Main,
    },
    {
        id: 'login',
        path: '/login',
        component: Login,
    },
    {
        id: 'register',
        path: '/user/register',
        component: Register,
    },
    {
        id: 'registerTest',
        path: '/register',
        component: Register,
    },
    {
        id: 'searchFriend',
        path: '/search-friend',
        component: SearchFriend,
    },
    {
        id: 'searchGroup',
        path: '/search-group',
        component: SearchGroup,
    },
    {
        id: 'newGroup',
        path: '/new-group',
        component: NewGroup,
    },
    {
        id: 'record',
        path: '/record',
        component: Record,
    },
    {
        id: 'editProfile',
        path: '/edit-profile',
        component: EditProfile,
    },
    {
        id: 'groups',
        path: '/groups',
        component: Groups,
    },
    {
        id: 'friends',
        path: '/friends',
        component: Friends,
    },
    {
        id: 'requestFriends',
        path: '/request-friends',
        component: RequestFriend,
    },
    {
        id: 'cam',
        path: '/cam',
        component: WebcamComponent,
    },
    {
        id: 'test',
        path: '/test',
        component: Test,
    },
    {
        id: 'groupinfo',
        path: '/groups/:id',
        component: GroupInfo,
    },
    {
        id: 'blockFriends',
        path: '/block-friends',
        component: BlockedFriends,
    },
    {
        id: 'groupinfoKickout',
        path: '/groups/kickoutlist/:id',
        component: GroupInfoKickout,
    },
    {
        id: 'myProfile',
        path: '/my-profile',
        component: MyProfile,
    },
];

export default routes;
