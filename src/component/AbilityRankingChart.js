import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Chart } from '@antv/g2';
import { Row, Col } from 'antd';

const techData = [
    { country: '李是', population: 5 },
    { country: '李你好', population: 13 },
    { country: '李不是', population: 15 },
    { country: '李看空', population: 20 },
    { country: '李不能', population: 23 },
    { country: '李哈哈', population: 26 },
    { country: '李还是', population: 26 },
    { country: '李好', population: 29 },
    { country: '李他', population: 30 },
    { country: '李和为', population: 34 },
    { country: '李地方', population: 35 },
    { country: '李七', population: 37 },
    { country: '赵六', population: 40 },
    { country: '王五', population: 42 },
    { country: '张三', population: 45 },
    { country: '李四', population: 50 },
];

const learnData = [
    { country: '李是', population: 5 },
    { country: '李你好', population: 13 },
    { country: '李不是', population: 15 },
    { country: '李看空', population: 20 },
    { country: '李不能', population: 23 },
    { country: '李哈哈', population: 26 },
    { country: '李还是', population: 26 },
    { country: '李好', population: 29 },
    { country: '李他', population: 30 },
    { country: '李和为', population: 34 },
    { country: '李地方', population: 35 },
    { country: '李七', population: 37 },
    { country: '赵六', population: 40 },
    { country: '王五', population: 42 },
    { country: '张三', population: 45 },
    { country: '李四', population: 50 },
];

const compreData = [
    { country: '李是', population: 5 },
    { country: '李你好', population: 13 },
    { country: '李不是', population: 15 },
    { country: '李看空', population: 20 },
    { country: '李不能', population: 23 },
    { country: '李哈哈', population: 26 },
    { country: '李还是', population: 26 },
    { country: '李好', population: 29 },
    { country: '李他', population: 30 },
    { country: '李和为', population: 34 },
    { country: '李地方', population: 35 },
    { country: '李七', population: 37 },
    { country: '赵六', population: 40 },
    { country: '王五', population: 42 },
    { country: '张三', population: 45 },
    { country: '李四', population: 50 },
];

const commuData = [
    { country: '李是', population: 5 },
    { country: '李你好', population: 13 },
    { country: '李不是', population: 15 },
    { country: '李看空', population: 20 },
    { country: '李不能', population: 23 },
    { country: '李哈哈', population: 26 },
    { country: '李还是', population: 26 },
    { country: '李好', population: 29 },
    { country: '李他', population: 30 },
    { country: '李和为', population: 34 },
    { country: '李地方', population: 35 },
    { country: '李七', population: 37 },
    { country: '赵六', population: 40 },
    { country: '王五', population: 42 },
    { country: '张三', population: 45 },
    { country: '李四', population: 50 },
];

export default class AbilityRankingChart extends Component {
    static propTypes = {
        prop: PropTypes
    }

    renderAbilityRankingChart(containerId, data) {
        const chart = new Chart({
            container: containerId,
            autoFit: true,
            height: 500,
        });

        chart.data(data);
        chart.scale('population', { nice: true });
        chart.coordinate().transpose();
        chart.tooltip({
            showMarkers: false
        });
        chart.interaction('active-region');
        chart.interval()
        .position('country*population')
        .label('population', {
            offset: -10,
            content: (data) => {
              return data.population;
            }
          });
        chart.render();
    }

    componentDidMount() {
        this.renderAbilityRankingChart('techRanking', techData);
        this.renderAbilityRankingChart('learnRanking', learnData);
        this.renderAbilityRankingChart('comprehensionRanking', compreData);
        this.renderAbilityRankingChart('communicationRanking', commuData);
    }

    render() {
        return (
            <div>
                <h1>学员能力排名</h1>
                <Row >
                    <Col flex="820px">
                        <div>
                            <h2>技术能力排名</h2>
                            <div id="techRanking"></div>
                        </div>
                    </Col>
                    <Col flex="820px">
                        <div>
                            <h2>学习能力排名</h2>
                            <div id="learnRanking"></div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col flex="820px">
                        <div>
                            <h2>理解能力排名</h2>
                            <div id="comprehensionRanking"></div>
                        </div>
                    </Col>
                    <Col flex="820px">
                        <div>
                            <h2>沟通能力排名</h2>
                            <div id="communicationRanking"></div>
                        </div>
                    </Col>
                </Row>
            </div >
        )
    }
}