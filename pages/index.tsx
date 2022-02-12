import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { Layout } from '../components/Layout/';
import { Category } from '../components/Category/';
import { Button } from '../components/Button/';
import { Modal } from '../components/Modal/';
import { useAPIGateway } from '../hooks/APIGateway/';
import { EventDispatcher } from '../EventDispatcher/';
import { SELECT_CARD } from '../Events/';
import styles from '../styles/Home.module.css';

globalThis.events = EventDispatcher()();
let cache;

const Home: NextPage = () => {
	const [modalState, setModalState] = useState<boolean>(false);
	const [message, setMessage] = useState<string>('NOTHING SELECTED');
	const {
		data,
		setData,
		loader,
		setHttpProps,
	} = useAPIGateway();
	cache = data;

	useEffect(() => {
		setHttpProps(() => ({
    	method: 'GET',
    	endPoint: 'ballots',
    }));
	}, []);

	useEffect(() => {
		globalThis.events.listen(SELECT_CARD, selectCard);
	}, []);

	const selectCard = (item) => {
		cache.filter(category => {
			if (category.id === item.categoryId && !category?.chosen) {
				category.items.filter(nominee => {
					if (nominee.id === item.item.id) {
						nominee['selected'] = true;
						category['chosen'] = true;
					}
				});
			}
		});

		setData([...cache]);
		setMessage('SUCCESS');
	};

	const showModal = () => {
		setModalState(!modalState);
	};

  return (
  	<div>
  		{modalState && <Modal message={message} setState={() => setModalState(!modalState)} />}
	    <Layout appTitle="AWARDS 2021">
	    	{
	    		data.map((item, index) => (
	    			<Category
	    				key={`${item.id}-${index}`}
	    				title={item.title}
	    				id={item.id}
	    				items={item.items}
	    			/>
	    		))
	    	}
	    	<Button action={showModal} label="Submit Ballot" type="submit" />
	    </Layout>
    </div>
  )
}

export default Home;
