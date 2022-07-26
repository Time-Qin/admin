import request from '../utils/request';

export function fetchCashFlowList(query){
    return request({
        url:'/api/cashflow/list',
        method:'get',
        params: query
    });
}

export function fetchListById(id){
    return request({
        url:`/api/cashflow/list/${id}`,
        method:'get'
    });
}

export function updateCash(data){
    return request({
        url:'/api/cashflow/update',
        method:'post',
        data:data
    });
}

export function deleteCash(query){
    return request({
        url:'/api/cashflow/delete',
        method:'get',
        params:query
    })
}