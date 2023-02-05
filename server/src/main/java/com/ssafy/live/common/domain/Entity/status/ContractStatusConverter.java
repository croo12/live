package com.ssafy.live.common.domain.Entity.status;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

@Converter
public class ContractStatusConverter implements AttributeConverter<ContractStatus, Integer> {
    @Override
    public Integer convertToDatabaseColumn(ContractStatus attribute) {
        return attribute.getValue();
    }

    @Override
    public ContractStatus convertToEntityAttribute(Integer dbData) {
        return ContractStatus.ofValue(dbData);
    }
}
