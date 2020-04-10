import React, { useEffect, useState } from 'react';
import { List, message, Avatar, Spin } from 'antd';
import axios from 'axios'
const News = () => {
    const [news, setNews] = useState([])
    useEffect(() => {
        axios.get('https://newsapi.org/v2/top-headlines?country=in&q=COVID&from=2020-03-16&sortBy=publishedAt&apiKey=3af4f0ac65714696a4c9d202e167def4&pageSize=100&page=1')
            .then(function (response) {
                console.log(response.data.articles)
                setNews(response.data.articles)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    return (
        <div>
            {/* {news.map(({ title, url, urlToImage }) => (
                <div>
                    <p>{title}</p>
                    <p>{url}</p>
                    <p>{urlToImage}</p>
                    <hr />
                </div>
            ))} */}
            <List
                itemLayout="horizontal"
                dataSource={news}
                renderItem={item => (
                    <List.Item className="newsCard">
                        <List.Item.Meta
                            avatar={<Avatar shape="square" size={64} src={item.urlToImage} />}
                            title={<a href={item.url} target="_blank">{item.title}</a>}
                        />
                    </List.Item>
                )}
            />

        </div>
    );
}

export default News;