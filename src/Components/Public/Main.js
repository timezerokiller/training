import React, {useState} from "react"
import {Provider as AlertProvider} from "react-alert"
import AlertTemplate from "react-alert-template-basic"
import MyRoutes from "../../Routes/MyRoutes"
import {Layout, Menu, Breadcrumb} from 'antd';
import 'antd/dist/antd.css';
import {Link} from "react-router-dom";
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';


import {Links, LinksUser, breadcrumbs} from "../../API/LinksAPI"
import Cookies from "js-cookie";


const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;


const link = Links;


const Main = (props) => {
    const [coll, setCollapsed] = useState(false)

    const onCollapse = (coll) => {
        console.log(coll);
        setCollapsed(coll)
    }

    const options = {
        timeout: 4000,
        offset: '30px',
    }
    const Mybreadcrumbs = useBreadcrumbs(breadcrumbs);


    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider collapsible collapsed={coll} onCollapse={onCollapse}>
                <div className="logo"/>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <SubMenu key="sub1" icon={<UserOutlined/>} title="Профиль">
                        <Menu.Item key="3">{props.auth === true ?
                            <Link to="/logout"><button onClick={(e) => {
                                props.loginOut()
                                Cookies.set('Login', false)
                            }} className="btn-danger">Выйти</button>
                            </Link>
                            :
                            <Link to="/login">Войти</Link>}</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout>
                <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
                    <div className="logo"/>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
                        {link.map((link, index) => <Menu.Item key={index}><Link to={link.path}>{link.name}</Link></Menu.Item>)}
                    </Menu>
                </Header>
                <Content className="site-layout" style={{padding: '0 50px', marginTop: 64}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        {Mybreadcrumbs.map(({breadcrumb}) => <Breadcrumb.Item
                            key={breadcrumb}>{breadcrumb}</Breadcrumb.Item>)}
                    </Breadcrumb>
                    <div className="site-layout-background" style={{padding: 24, minHeight: 380}}>

                        <MyRoutes/>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>Footer</Footer>
            </Layout>
        </Layout>
    )
}

export default Main