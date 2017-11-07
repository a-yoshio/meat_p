package jp.co.yoshino.meat_p;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import jp.co.yoshino.meat_p.domain.Meat;
import jp.co.yoshino.meat_p.domain.PassData;

@Mapper
public interface MeatMapper {
	/**キーワード検索マップ*/
	List<Meat> findByKeyWord(String key);
	/**畜種ごと部位検索*/
	List<Meat> findByLivestockAndPartId(PassData passdata);
}
