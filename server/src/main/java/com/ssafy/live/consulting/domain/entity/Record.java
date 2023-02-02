package com.ssafy.live.consulting.domain.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.ssafy.live.common.domain.Entity.BaseEntity;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AttributeOverride(name = "no", column = @Column(name = "record_no"))
@Entity
public class Record extends BaseEntity {

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "consulting_item_no")
    private ConsultingItem consultingItem;

    @Column(name = "save_folder")
    private String saveFolder;

    @Column(name = "original_file")
    private String originalFile;

    @Column(name = "save_file")
    private String saveFile;
}

