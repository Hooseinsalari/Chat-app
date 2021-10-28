import React from 'react';

// styles
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>Hosagram</h2>
            </div>
            <div className={styles.logout}>
                <button>Logout</button>
            </div>
        </div>
    );
};

export default Navbar;