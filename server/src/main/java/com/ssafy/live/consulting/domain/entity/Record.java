package com.ssafy.live.consulting.domain.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafy.live.common.domain.Entity.BaseEntity;
import javax.persistence.AttributeOverride;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Getter
@SuperBuilder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AttributeOverride(name = "no", column = @Column(name = "record_no"))
@Entity
public class Record extends BaseEntity {

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "consulting_no")
    private Consulting consulting;

    @Column(name = "save_folder")
    private String saveFolder;

    @Column(name = "original_file")
    private String originalFile;

    @Column(name = "save_file")
    private String saveFile;
}
