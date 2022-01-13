
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './footer.css'
import { Row, Col, } from 'react-bootstrap'
import { Ctx } from "./App";
import { BsGithub } from 'react-icons/bs'
import { FaLink } from 'react-icons/fa'
import { CgMail } from 'react-icons/cg'
import { SiVisualstudiocode } from 'react-icons/si'



export default function Footer() {
	const received = React.useContext(Ctx)
	const mode = received[0]
	const material = [
		{
			name: 'Useful Links:',
			icon: FaLink,
			description: ["https://javascript.info/", "https://www.w3schools.com/", 'https://reactjs.org', 'https://dmitripavlutin.com', 'https://react-bootstrap.github.io']
		},
		{
			name: 'Github:',
			icon: BsGithub,
			description: ["https://github.com/TalantRahimberdiev"]
		},
		{
			name: 'Contacts:',
			icon: CgMail,
			description: ['rahimberdiev240793@gmail.com']
		},
		{
			name: 'Code of mini-project: ',
			icon: SiVisualstudiocode,
			description: ["https://github.com/TalantRahimberdiev/mini_project", 'https://codesandbox.io/s/sleepy-http-oreej']
		}
	]

	return (
		<Row id={'row_' + mode}>
			{
				material.map((item, index) => {
					return (
						<Col xs={12} sm={6} md={3} lg={3} key={index}>
							<details id={'details_'+mode} key={item}>
								<summary key={item.name}>
									<item.icon id={'icon_'+mode}/>
									{item.name}</summary>
								{
									item.description.map((element, i) => {
										return (
											<a id='a_href' key={i} key={element} href={element}>{element}</a>
										)
									})
								}
							</details>
						</Col>
					)
				})
			}
		</Row>
	)
}