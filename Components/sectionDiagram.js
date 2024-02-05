import Image from 'next/image';
import Test from './test'

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top',
		},
		title: {
			display: true,
			text: 'Chart.js Line Chart',
		},
	},
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
	labels,
	datasets: [
		{
			label: 'Dataset 1',
			data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
			borderColor: 'rgb(255, 99, 132)',
			backgroundColor: 'rgba(255, 99, 132, 0.5)',
		},
		{
			label: 'Dataset 2',
			data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
			borderColor: 'rgb(53, 162, 235)',
			backgroundColor: 'rgba(53, 162, 235, 0.5)',
		},
	],
};


export function sectionDiagram() {
// const sectionDiagram = () => {
		return(
				<>
				<Test />
				<div className="section-diagram">
				<div className="diagram">
					<div className="diagram diagram--mode">
						<div className="mode">
							<Line data={data} options={options} style={{ width: "834px", height: "359px" }} />
						</div>
					</div>
					<div className="diagram diagram--bar">
						<div className="bar">
							<Image src="/images/group184.png" alt="image" width={384} height={361} />
						</div>
					</div>
				</div>
			</div>
				</>
		)
}

export default sectionDiagram;