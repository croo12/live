package com.ssafy.live.common.domain.Entity.status;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

@Converter
public class ConsultingStatusConverter implements AttributeConverter<ConsultingStatus, Integer> {
    @Override
    public Integer convertToDatabaseColumn(ConsultingStatus attribute) {
        return attribute.getValue();
    }

    @Override
    public ConsultingStatus convertToEntityAttribute(Integer dbData) {
        return ConsultingStatus.ofValue(dbData);
    }
}
