import { DownOutlined } from "@ant-design/icons";
import { Button, Card, Dropdown, Flex, Space } from "antd";
import React from "react";
import "./movie.css";

const MovieItem = () => {
  return (
    <Card
      className="image-card"
      cover={
        <img
          height="250px"
          width="auto"
          src="https://cdn.galaxycine.vn/media/2024/4/10/ghostbusters-frozen-empire-500_1712719794740.jpg"
          alt="img"
        />
      }
      hoverable
    >
      <Card.Meta title={<h4>Movie name</h4>} />
      <div className="card-content">
        <Button className="button" type="primary">
          Button
        </Button>
      </div>
    </Card>
  );
};

const DropdownImageItem = ({ item }) => {
  const { name, path, movies } = item;

  return (
    <Card
      title={
        <a href={path} style={{ textDecoration: "none" }}>
          {name}
        </a>
      }
      bordered={false}
    >
      <Flex gap="middle" align="start" vertical>
        <Flex justify="space-arround" align="center">
          {movies.map((m, _id) => (
            <MovieItem key={_id} />
          ))}
        </Flex>
      </Flex>
    </Card>
  );
};

const DropdownImage = ({ title, dropdownItems }) => {
  const onClick = ({ key }) => console.log(key);

  const items = dropdownItems.map((item) => ({
    key: "1",
    label: <DropdownImageItem item={item} />,
  }));

  return (
    <Dropdown
      menu={{
        items,
        onClick,
      }}
      placement="bottomLeft"
    >
      <Space>
        {title}
        <DownOutlined />
      </Space>
    </Dropdown>
  );
};

export default DropdownImage;
