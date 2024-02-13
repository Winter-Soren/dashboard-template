import { createSlice, PayloadAction } from '@reduxjs/toolkit';

//  -----------------------------------------------------------------------------

interface ImageUpload {
	imageFile: File | null;
	url: string | null;
	isLoading: boolean;
	isDragOver: boolean;
}

interface NFTFormFields {
	name: string;
	description: string;
	price: string;
	quantity: string;
	category: string;
	tags: string[];
}

interface CombinedNFTImageFormState {
	imageUpload: ImageUpload;
	nftFormFields: NFTFormFields;
}

// combined reducer for NFT Form and NFT Image
const combinedNFTImageFormSlice = createSlice({
	// slice name (used as the prefix for generated action types)
	name: 'combinedNFTImageForm',
	initialState: {
		imageUpload: {
			imageFile: null,
			url: null,
			isLoading: false,
			isDragOver: false
		},
		nftFormFields: {
			name: '',
			description: '',
			price: '',
			quantity: '',
			category: '',
			tags: []
		}
	} as CombinedNFTImageFormState,

	// reducers (functions, actions)
	reducers: {
		setImageUpload: (state, action: PayloadAction<Partial<ImageUpload>>) => {
			state.imageUpload = { ...state.imageUpload, ...action.payload };
		},
		setNFTFormFields: (state, action: PayloadAction<Partial<NFTFormFields>>) => {
			state.nftFormFields = { ...state.nftFormFields, ...action.payload };
		}
	}
});

export const { setImageUpload, setNFTFormFields } = combinedNFTImageFormSlice.actions;
export default combinedNFTImageFormSlice.reducer;
