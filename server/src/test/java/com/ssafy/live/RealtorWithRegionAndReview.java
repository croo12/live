package com.ssafy.live;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import com.ssafy.live.account.realtor.domain.repository.RealtorRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
public class RealtorWithRegionAndReview {

    @Autowired
    RealtorRepository realtorRepository;

    @Test
    public void realtorWithRegion() {
        List<Realtor> list = realtorRepository.findDistinctRealtorWithItemsByHouseByRegion("3020011300");
        list.stream().forEach(r->System.out.println(r.getName()));
    }
}
