package jp.co.yoshino.meat_p;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import jp.co.yoshino.meat_p.domain.Meat;

@Mapper
public interface MeatMapper {
	/**キーワード検索マップ*/
	List<Meat> findByKeyWord(String key);
	/**畜種ごと部位検索*/
	List<Meat> findByLivestockIdAndPartId(int livestockId, int partId);
	
	
}
