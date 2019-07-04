import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultStatus = fromJS({
	detail_data: {},		// 文章详细内容
})

export default (status = defaultStatus, action) => {
	switch (action.type) {
		case actionTypes.INIT_DETAIL_DATA:
			return status.set('detail_data', action.data)
		default: 
			return status;
	}
}