package jp.co.yoshino.meat_p.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jp.co.yoshino.meat_p.domain.Meat;
import jp.co.yoshino.meat_p.service.SearchService;

@RestController
@RequestMapping("/rest")
public class APIController {
	@Autowired
	private SearchService searchService;
	
	/**キーワード、条件検索*/
	@RequestMapping("/keyword")
	public List<Meat> findByKeyWordAndCondition(String livestockId, String hardLev, String keyword){
		return searchService.findByKeyWordAndCondition(livestockId, hardLev, keyword);
	}
	
	/**牛の部位検索*/
	@RequestMapping("/beef")
	public List<Meat> findByBeefPartId(String partId){
		return searchService.findByLivestockAndPartId(0, partId);
	}
	
	/**豚の部位検索*/
	@RequestMapping("/pork")
	public List<Meat> findByPorkPartId(String partId){
		return searchService.findByLivestockAndPartId(1, partId);
	}
	
	/**鶏の部位検索*/
	@RequestMapping("/chiken")
	public List<Meat> findByChikenPartId(String partId){
		return searchService.findByLivestockAndPartId(2, partId);
	}
	
}