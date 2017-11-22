package jp.co.yoshino.meat_p.controller;


import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jp.co.yoshino.meat_p.domain.HardLevelData;
import jp.co.yoshino.meat_p.domain.LivestockData;
import jp.co.yoshino.meat_p.domain.Meat;
import jp.co.yoshino.meat_p.domain.MeatData;
import jp.co.yoshino.meat_p.domain.Part;
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
	
	/**畜種データ全件取得*/
	@RequestMapping("/allLivestock")
	public List<LivestockData> getLivestockData(){
		return searchService.findAllLivestcokData();
	}
	
	/**かたさデータ全件取得*/
	@RequestMapping("/allHardLevel")
	public List<HardLevelData> getHardLevelData(){
		return searchService.findAllHardLevelData();
	}
	
	/**部位データ全件取得*/
	@RequestMapping("/AllPartData")
	public List<Part> getAllPartData(String livestockName){
		return searchService.findAllPart(livestockName);
	}
	
	/**部位データをIDで検索*/
	@RequestMapping("/findPartByPartId")
	public Part findPartByPartId(String livestockName, String partId) {
		return searchService.findPartByPartId(livestockName, partId);
	}
	
	/**お肉データをIDで取得*/
	@RequestMapping("/detail")
	public MeatData getDetail(String meatId,String livestockId) {
		return searchService.findByIdFromMeatTable(meatId, livestockId);
	}
	
	/**お肉名から料理をクックパッドから取得*/
	@RequestMapping("/cookingMenu")
	public Map<String, List<String>> getCookingMenu(String meatJName) throws IOException{
		Map<String, List<String>> elementMap= searchService.getCookingMenu(meatJName);
		return elementMap;
	}
}