import { 
	IS_LOADING,  
} from './types'

export const setLoading = (loading) => {
	return { type: IS_LOADING, loading }
}