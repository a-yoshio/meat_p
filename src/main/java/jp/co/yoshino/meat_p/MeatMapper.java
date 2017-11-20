package jp.co.yoshino.meat_p;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import jp.co.yoshino.meat_p.domain.HardLevelData;
import jp.co.yoshino.meat_p.domain.LivestockData;
import jp.co.yoshino.meat_p.domain.Meat;
import jp.co.yoshino.meat_p.domain.MeatData;
import jp.co.yoshino.meat_p.domain.Part;
import jp.co.yoshino.meat_p.domain.PassData;
import jp.co.yoshino.meat_p.domain.PassDataForIndexDetail;

@Mapper
public interface MeatMapper {
	/**キーワード検索マップ*/
	List<Meat> findByKeyWord(String key);
	/**畜種ごと部位でお肉検索*/
	List<Meat> findByLivestockAndPartId(PassData passdata);
	/**畜種ごと全件お肉検索*/
	List<Meat> findAllByLivestockId(int livestock);
	/**お肉データをID検索して取得*/
	MeatData findByIdFromMeatTable(PassDataForIndexDetail passDataForIndexDetail);
	/**畜種名をIDで取得*/
	String findLivestockENameByLivestockId(int livestockId);
	/**畜種情報全件検索*/
	List<LivestockData> findAllLivestockData();
	/**かたさ情報全件検索*/
	List<HardLevelData> findAllHardLevelData();
	/**部位データ全件取得*/
	List<Part> findAllPart(Map<String, String> map);
	/**部位Idで部位テーブル内検索*/
	Part findPartByPartId(Map<String, String> map);
}
