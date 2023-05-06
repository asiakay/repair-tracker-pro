import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/SettingsPage.module.css';

const SettingsPage = () => {
  return (
    <Layout>
      <div className={styles["settingsPage"]}>
        <h2 className={styles["settingsPage"]}>Settings</h2>
        <form className={styles["settingsPage"]}>
          <label className={styles["settingsPage"]}>
            Notification Preferences:
            <select className={styles["settingsPage"]}>
              <option value="email">Email</option>
              <option value="sms">SMS</option>
              <option value="push">Push Notifications</option>
            </select>
          </label>
          <br />
          <label className={styles["settingsPage"]}>
            Theme:
            <select className={styles["settingsPage"]}>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </label>
          <br />
          <button type="submit" className={styles["settingsPage"]}>Save Changes</button>
        </form>
      </div>
    </Layout>
  );
};

export default SettingsPage;
