import React, {useState} from "react"
import {Link} from "react-router-dom"
import {Pagination} from 'antd';
import {Card, Col, Row} from 'antd';
import { PageHeader } from 'antd';


const Posts = (props) => {

    const {Meta} = Card;


    const setPage = (e) => {
        props.setPage(e)
    }

    const onShowSizeChange = (current, size) => {
        props.setPage(current)
        props.setPostsLimit(size)
    }

    const sliceIntoChunks = (arr, chunkSize) => {
        const res = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            const chunk = arr.slice(i, i + chunkSize);
            res.push(chunk);
        }
        return res
    }

    let posts

    if (props.pagination.limit && props.posts) {
        posts = sliceIntoChunks(props.posts, props.pagination.limit)
        if (props.pagination.page !== 0) {
            posts = posts[props.pagination.page - 1]
        } else {
            posts = posts[props.pagination.page]
        }
    }
    console.log(posts)

    const pagination = (
        props.posts
            ? <div>
                <Pagination onChange={setPage} defaultCurrent={1} total={props.posts.length}
                            onShowSizeChange={onShowSizeChange}/>
            </div>
            : <p>---------</p>

    )

    return (
        <div className="site-card-wrapper">
            <PageHeader
                className="site-page-header"
                onBack={() => null}
                title="Статьи"
            />,
        <Row gutter={[16,24]}>
                {posts
                    ? posts.map(post =>
                        <Col span={12} xs={24} className="gutter-row">
                            <Card title={post.title} bordered={false}>
                                {post.body}
                            </Card>
                        </Col>

                    )
                    : <h3>Загрузка</h3>
                }
                {pagination}
        </Row>
        </div>
    )
}
export default Posts