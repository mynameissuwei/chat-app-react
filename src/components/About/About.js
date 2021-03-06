import React from 'react'
import { Wrapper,Cont } from './style'
import age from '../../static/i_age.svg'
import edu from '../../static/i_edu.svg'
import site from '../../static/i_site.svg'
import status from '../../static/i_status.svg'
import Particles from 'react-particles-js';

import './styles.css'

  

const ParticlesContainer = (props) => (
<Particles
    style={{
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      top: 0
    }}
    params={{
	    "particles": {
	        "number": {
	            "value": 60
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
);




class About extends React.Component {
  render() {
    const data = [{url:age,word:'年龄/25',id:1},{url:edu,word:'学历/专科',id:2},{url:site,word:'坐标/杭州',id:3},{url:status,word:'状态/在职',id:4}]
    return (
      <div className="about">
        <h1>关于我</h1>
        <div className='content'>
          {
            data.map(item => 
              <Cont key={item.id}>
                <img src={item.url} alt=""/>
                <p>{item.word}</p>
              </Cont>   
            )
          }
        </div>
        <div className='ex'>
          <p>四年全职前端开发经验</p>
          <p>熟悉MV*开发,深谙自动化,模块化开发之道</p>
          <p>高效的自学能力,具备独立分析解决问题能力</p>
          <p>强烈的自我驱动力,代码强迫症患者</p>
        </div>
        <ParticlesContainer />
      </div>
    );
  }
}

export default About

