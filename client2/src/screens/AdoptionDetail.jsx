import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Avatar,
  Rate,
  Space,
  Table,
  Typography,
  Tag,
  Dropdown,
  message,
  Button,
  Breadcrumb,
  Image,
  Carousel,
  Steps
} from "antd";
import { HolderOutlined, PlusCircleOutlined } from "@ant-design/icons";
import "./../App.css";
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
  
} from "@ant-design/icons";

import {
  IoMdPaw,
  IoMdList,
  IoMdCheckmarkCircleOutline,
  IoIosWallet,
  IoIosHome,
  IoIosDocument
} from "react-icons/io";


const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const columns = [
  {
    title: "Adopter ID",
    dataIndex: "adopterId",
    key: "adopterId",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Adopter's Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Date of Application",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (_, { statuses }) => (
      <>
        {statuses.map((tag) => {
          let color = "green";

          if (tag === "in progress") {
            color = "green";
          } else {
            color = "orange";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "",
    key: "action",
    render: (_, actions) => (
      <Dropdown
        menu={{
          items,
          onClick,
        }}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            {/* Actions
            <DownOutlined /> */}
            <HolderOutlined />
          </Space>
        </a>
      </Dropdown>
    ),
  },
];

const data = [
  {
    adopterId: "A0001",
    name: "Anna Lim",
    date: "01-01-2023",
    statuses: ["in progress"],
  },
  {
    adopterId: "A0002",
    name: "Robert Thomas",
    date: "08-02-2023",
    statuses: ["waitlist"],
  },
];

const items = [
  {
    label: "View Adoption Details",
    key: "1",
  },
];

const AdoptionDetail = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <Space direction="vertical table">
      <Breadcrumb
        className="mt-10"
        items={[
          {
            title: <Link to="/">All Pets</Link>,
          },
          {
            title: <Link to="/PetDetails">Pet Details</Link>,
          },
          {
            title: "Adoption Details",
          },
        ]}
      />

      <div className="font-nunito flex content-start">
        <Typography.Title
          // level={4}
          className="font-nunito font-bold font-6xl mt-5 mr-4"
        >
          Adoption Details
        </Typography.Title>
        <div class="text-xs inline-flex items-center font-bold leading-sm uppercase px-3  bg-green-200 text-green-700 rounded-xl h-10 mt-6">
          In-Progress
        </div>
        <div class="text-xs inline-flex items-center font-bold leading-sm uppercase px-3  bg-pink-200 text-pink-700 rounded-xl ml-3 h-10 mt-6">
          Anna Lim
        </div>
        <button>Approve Pre-Screening</button>
        <button>Reject Adoption</button>
      </div>

      <div className="font-nunito flex content-start">
        <div className="w-3/6 bg-orange-100 rounded-2xl mr-5">
          {/*  adoption fee, date joined */}

          <div className="grid grid-cols-2">
            <div>
              <h2 className="m-5">
                <b>Name: </b>Timothee Catlamet
              </h2>
              <h2 className="m-5">
                <b>Id: </b>P1235
              </h2>
              <h2 className="m-5">
                <b>Breed: </b>Siamese x Persian
              </h2>
              <h2 className="m-5">
                <b>Age: </b>1 year(s)
              </h2>
            </div>
            <div>
              <h2 className="m-5">
                <b>Weight: </b>4.5kg
              </h2>
              <h2 className="m-5">
                <b>Medical Details: </b>Fully Vaccinated, FIV Negative, Slight
                PICA Tendency
              </h2>
              <h2 className="m-5">
                <b>Adoption Fee: </b> 120 SGD
              </h2>
              <h2 className="m-5">
                <b>Date Joined: </b>12/01/2023
              </h2>
            </div>
          </div>
        </div>
        <Image
          width={800}
          className="rounded-xl ml-3"
          src="https://images.unsplash.com/photo-1592652426689-4e4f12c4aef5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2lhbWVzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        />
        <div className="w-3/6 bg-orange-200 rounded-2xl ml-8">
          {/*  adoption fee, date joined */}

          <div className="grid grid-cols-2">
            <div>
              <h2 className="m-5">
                <b>Name: </b>Anna Lim
              </h2>
              <h2 className="m-5">
                <b>Id: </b>A1494
              </h2>
              <h2 className="m-5">
                <b>Contact: </b>+65 1234 5678
              </h2>
              <h2 className="m-5">
                <b>DOB: </b>04/05/1996
              </h2>
            </div>
            <div>
              <h2 className="m-5">
                <b>Email: </b>annalim@gmail.com
              </h2>
              <h2 className="m-5">
                <b>Application Date: </b>08-03-2023
              </h2>
              <h2 className="m-5">
                <b>Adoption Fee: </b> 120 SGD
              </h2>
              <h2 className="m-5">
                <b>Date Joined: </b>12/01/2023
              </h2>
            </div>
          </div>
        </div>
      </div>

      <Steps
        className="mt-10 font-nunito"
        items={[
          {
            title: "Pre-Screening",
            status: "finish",
            icon: <IoMdList className="text-[#F7AF7A]" />,
          },
          {
            title: "Home Check",
            status: "finish",
            icon: <IoIosHome className="text-[#F7AF7A]" />,
          },
          {
            title: "Approved",
            status: "finish",
            icon: <IoMdCheckmarkCircleOutline className="text-[#F7AF7A]" />,
          },
          {
            title: "Adoption Contract",
            status: "finish",
            icon: <IoIosDocument className="text-[#F7AF7A]" />,
          },
          {
            title: "Payment",
            status: "finish",
            icon: <IoIosWallet className="text-[#F7AF7A]" />,
          },
          {
            title: "Collection",
            status: "wait",
            icon: <IoMdPaw />,
          },
        ]}
      />
    </Space>
  );
};

export default AdoptionDetail;
