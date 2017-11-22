package jp.co.yoshino.meat_p.repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import jp.co.yoshino.meat_p.domain.HardLevelData;
import jp.co.yoshino.meat_p.domain.LivestockData;
import jp.co.yoshino.meat_p.domain.Meat;
import jp.co.yoshino.meat_p.domain.MeatData;
import jp.co.yoshino.meat_p.domain.Part;
import jp.co.yoshino.meat_p.domain.PassData;
import jp.co.yoshino.meat_p.domain.PassDataForIndexDetail;

@Repository
@Transactional
public class MeatRepository {
	@Autowired
	private SqlSession session;
	
	/**キーワード検索情報取得*/
	public List<Meat> findByKeyWord(String keyword){
		String key= "%"+keyword+"%";
		return session.selectList("findByKeyWord", key);
	}
	
	/**畜種と部位ごとで検索*/
	public List<Meat> findByLivestockAndPartId(int livestock, int partId){
		PassData passData= new PassData(livestock, partId);
		return session.selectList("findByLivestockAndPartId", passData);
	}
	
	/**畜種ごと全件検索*/
	public List<Meat> findAllByLivestockId(int livestock){
		return session.selectList("findAllByLivestockId", livestock);
	}
	
	/**畜種IDで畜種名を取得*/
	public String findLivestockENameByLivestockId(int livestockId) {
		return session.selectOne("findLivestockENameByLivestockId",livestockId);
	}
	
	/**お肉IDで詳細情報を取得*/
	public MeatData findByIdFromMeatTable(int meatId,String livestockName){
		PassDataForIndexDetail passData= new PassDataForIndexDetail(livestockName,meatId);
		return session.selectOne("findByIdFromMeatTable", passData);
	}
	
	/**livestockData全件取得*/
	public List<LivestockData> findAllLivestockData(){
		return session.selectList("findAllLivestockData");
	}
	
	/**hardLevelData全件取得*/
	public List<HardLevelData> findAllHardLevelData(){
		return session.selectList("findAllHardLevelData");
	}
	
	/**部位データ全件取得*/
	public List<Part> findAllPart(String livestockName){
        Map<String,String> map= new HashMap<>();
        map.put("tableName",livestockName+"_part");
        return session.selectList("findAllPart", map);
    }
	
	/**部位IDで部位テーブルを検索*/
	public Part findPartByPartId(String livestockName, String partId) {
		Map<String, String> map= new HashMap<>();
		map.put("tableName", livestockName+"_part");
		map.put("partId", partId);
		return session.selectOne("findPartByPartId", map);
	}
	
	/**畜種英名から畜種IDを取得*/
	public Meat getMeatDataById(int meatId){
		return session.selectOne("getMeatDataById", meatId);
	}
}