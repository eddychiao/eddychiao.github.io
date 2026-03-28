import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { itemData } from '../const/photodata';

const Photogrid: React.FC = () => {
	const styles = { width: "80%", height: "100%" }
	return (
				<Box sx={ styles }>
					<ImageList variant="masonry" cols={3} gap={8}>
						{itemData.map((item) => (
							<ImageListItem key={item.img}>
								<img
									// srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
									// src={`${item.img}?w=248&fit=crop&auto=format`}
									src={`${item.img}`}
									alt={item.title}
									loading="lazy"
								/>
							</ImageListItem>
						))}
					</ImageList>
				</Box>
	);
}

export default Photogrid