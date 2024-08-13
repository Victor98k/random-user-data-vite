import useRandomUser from "../components/useRandomUser";
import styles from "../styles/home.module.css";
import { Card, Avatar, Spin, Result, Button } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

// Task 3: Display User Data
// Render the fetched user data on the webpage using JSX. Display at least the user's name,
// email, phone number, and profile picture.

function Home() {
  const { user, loading, error, fetchUser } = useRandomUser();

  //   Task 4: Implement Error Handling
  // Handle errors that may occur during the API request and display an error message if
  // fetching data fails
  if (loading)
    return (
      <div className={styles.mainContainer}>
        <Spin size="large" className={styles.loadingFetch} tip="Loading..." />
      </div>
    );
  if (error)
    return (
      <div className={styles.mainContainer}>
        <Result
          status="error"
          title="Error"
          subTitle="There was an error fetching the user data."
          extra={
            <Button type="primary" onClick={() => window.location.reload()}>
              Retry
            </Button>
          }
        />
      </div>
    );

  return (
    <div className={styles.mainContainer}>
      <div className={styles.userContainer}>
        <h1>Our members</h1>
        {user && (
          <div className={styles.userProfile}>
            <Card hoverable className={styles.card}>
              <div className={styles.cardContent}>
                <Avatar
                  className={styles.avatarImg}
                  src={user.picture.large}
                  style={{ width: "100px", height: "100px" }}
                />
                <div className={styles.cardDescription}>
                  <h2
                    className={styles.firstName}
                  >{`${user.name.first} ${user.name.last}`}</h2>
                  <a href="">
                    <MailOutlined className={styles.icon} />
                    {user.email}
                  </a>
                  <p>
                    <PhoneOutlined className={styles.icon} />
                    {user.phone}
                  </p>
                  <p>
                    <EnvironmentOutlined className={styles.icon} />
                    {user.location.country}
                  </p>
                </div>
              </div>
            </Card>
            <Button onClick={fetchUser} className={styles.refetchBtn}>
              New user
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
