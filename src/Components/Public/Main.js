import React from "react"
import {Provider as AlertProvider} from "react-alert"
import AlertTemplate from "react-alert-template-basic"
import MyRoutes from "../../Routes/MyRoutes"
import NavHeaderContainer from "../Containers/NavHeaderContainer"
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import {Links} from "../../API/LinksAPI"
import {Link} from "react-router-dom";
import useBreadcrumbs from 'use-react-router-breadcrumbs';



const { Header, Content, Footer } = Layout;


const link = Links


const Main = () => {



    const options = {
        timeout: 4000,
        offset: '30px',
    }
    const Mybreadcrumbs = useBreadcrumbs(link);


    return (
        <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
                    {link.map((link, index)=> <Menu.Item key={index}><Link to={link.path}>{link.breadcrumb}</Link></Menu.Item>)}
                </Menu>
            </Header>
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    {Mybreadcrumbs.map(({ breadcrumb}) => <Breadcrumb.Item key={breadcrumb}>{breadcrumb}</Breadcrumb.Item>)}
                </Breadcrumb>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                    <MyRoutes/>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Footer</Footer>
        </Layout>
    )
}

export default Main