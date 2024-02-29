import React from 'react'
import styles from './Portfolio.module.css'

function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
            <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/429844327_885253233609871_8969488279601819475_n.png?stp=dst-png_p206x206&_nc_cat=102&ccb=1-7&_nc_sid=510075&_nc_eui2=AeEBDHO-1DNC5_OeVlo0MV5wileRhpDqK16KV5GGkOorXi6dZ1ONrh055IijsL1oLRpyk_pGk_221eYcVmirmLW4&_nc_ohc=Y8eerbXRJxUAX8IMynM&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRvu07vz3o3GGdMMMZJQMT6K7mQ0Wluh3ZTAq2AWIIIPQ&oe=6607B63A" alt="" />
            <p>Freecode capm</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/429727864_869047628240290_5223249713594873444_n.png?stp=dst-png_p206x206&_nc_cat=101&ccb=1-7&_nc_sid=510075&_nc_eui2=AeGuT_q45s70lQyPVo2rcBhq9bF4SoSgO371sXhKhKA7fpxwARq4yegpe5bhEgBm4AS4eDwEvsUkgC8f64bkdPUK&_nc_ohc=kH6IBHwtZ1QAX8W0O4h&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQGUysaon0Q1a_d6oroowUhzUZSzQE0A4oNnjkbVRpYzQ&oe=6607AC6A" alt="" />
            <p>Thaimooc</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/429632152_1729570184235430_4172685050093160704_n.png?stp=dst-png_s552x414&_nc_cat=107&ccb=1-7&_nc_sid=510075&_nc_eui2=AeGlQbDX7RXmY5szdfEuPIvD8EYqNC2WXujwRio0LZZe6CqrOeOCevBaiABRr-BWlH5Hf_trT0f_wgn-DbR73Hc5&_nc_ohc=uzOUh1WB19wAX-nWwkM&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTWTBH7UYzvVX3e3Pq73K0poZKwu_junYB1RH3F60UQmg&oe=6607C43E" alt="" />
            <p>Tinkercad</p>
        </div>
        
      </div>
    </div>
  )
}

export default Portfolio