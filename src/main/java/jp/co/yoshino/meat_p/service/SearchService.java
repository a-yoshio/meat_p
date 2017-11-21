package jp.co.yoshino.meat_p.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jp.co.yoshino.meat_p.domain.HardLevelData;
import jp.co.yoshino.meat_p.domain.LivestockData;
import jp.co.yoshino.meat_p.domain.Meat;
import jp.co.yoshino.meat_p.domain.MeatData;
import jp.co.yoshino.meat_p.domain.Part;
import jp.co.yoshino.meat_p.repository.MeatRepository;

@Service
public class SearchService {
	@Autowired
	private MeatRepository meatrepository;
	
	
	/**
	 * キーワード＆条件検索.
	 * @param livestockId 畜種ID
	 * @param hardLev かたさID
	 * @param keyword　キーワード
	 * @return　取得データ
	 */
	public List<Meat> findByKeyWordAndCondition(String livestockId, String hardLev, String keyword){
		String[] keyList= keyword.split(" ");
		List<Meat> conditionMatchList= new ArrayList<>();//重複なし、キーワード検索データ取得リスト
		//複数のキーワードで、データを探す。
		for(String key: keyList) {
			List<Meat> findList= meatrepository.findByKeyWord(key);
			System.out.println(findList.size()+"件取得しました");
			for(Meat meat: findList) {
				if(!(conditionMatchList.contains(meat))) {
					conditionMatchList.add(meat);
				}
			}
		}
		//指定された条件で絞る
			List<Meat> matchLivestockList= new ArrayList<>();
			List<Meat> matchHardLevList= new ArrayList<>();
			for(Meat meat: conditionMatchList) {
				//畜種指定があれば絞る
				if("".equals(livestockId)){
					matchLivestockList.add(meat);
				}else{
					if(meat.getLivestock() == Integer.parseInt(livestockId)) {
						matchLivestockList.add(meat);
						}
				}
			}
			for(Meat meat: matchLivestockList) {
				//硬さ指定があれば絞る
				if("".equals(hardLev)) {
					matchHardLevList.add(meat);
				}else {
					if(meat.getHard_lev() == Integer.parseInt(hardLev)) {
						matchHardLevList.add(meat);
					}
				}
			}
	
		return matchHardLevList;
	}
	
	/**
	 * 畜種別、部位検索.
	 * @param livestockId 畜種ID
	 * @param partId　部位ID
	 * @return　取得データ
	 */
	public List<Meat> findByLivestockAndPartId(int livestockId, String partId){
		if("".equals(partId)) {
			return meatrepository.findAllByLivestockId(livestockId);
		}
		return meatrepository.findByLivestockAndPartId(livestockId, Integer.parseInt(partId));
	}
	
	
	/**
	 * お肉詳細をお肉IDで取得.
	 * @param meatId お肉ID
	 * @param livestockId　畜種ID
	 * @return　詳細データ
	 */
	public MeatData findByIdFromMeatTable(String meatId, String livestockId) {
		int intLivestockId= Integer.parseInt(livestockId);
		String livestockName= meatrepository.findLivestockENameByLivestockId(intLivestockId);
		int intMeatId= Integer.parseInt(meatId);
		MeatData meat= meatrepository.findByIdFromMeatTable(intMeatId, livestockName);
		return meat;
	}
	
	/**畜種データ全件取得*/
	public List<LivestockData> findAllLivestcokData(){
		return meatrepository.findAllLivestockData();
	}
	
	/**かたさデータ全件取得*/
	public List<HardLevelData> findAllHardLevelData(){
		return meatrepository.findAllHardLevelData();
	}
	
	/**部位データ全件取得*/
	public List<Part> findAllPart(String livestockName){
		return meatrepository.findAllPart(livestockName);
	}
	
	/**部位データを部位IDで検索*/
	public Part findPartByPartId(String livestockName, String partId){
		if("".equals(partId)) {
			return null;
		}
		return meatrepository.findPartByPartId(livestockName, partId);
	}
}
